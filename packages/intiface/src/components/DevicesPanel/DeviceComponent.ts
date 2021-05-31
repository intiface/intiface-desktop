import Vue from "vue";
import { ButtplugClientDevice, ButtplugDeviceMessageType, RotationCmd, VibrationCmd } from "buttplug";
import { FrontendConnector } from "intiface-core-library";
import { Component, Model, Prop, ModelSync } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class DeviceComponent extends Vue {
  @Prop()
  private device!: ButtplugClientDevice;
  @ModelSync('change')
  private vibrationValues: Array<number> = []
  @ModelSync('change')
  private rotationValues: Array<number> = []
  @ModelSync('change')
  private linearValues: Array<[[number, number], number, boolean]> = []
  
  private mounted() {
    this.vibrationValues = Array<number>(this.VibrateCount + 1).fill(0)
    this.rotationValues = Array<number>(this.RotateCount + 1).fill(0)
    this.linearValues = Array<[[number, number], number, boolean]>(this.LinearCount + 1).fill([[0, this.LinearSteps], 1500, false])
  }

  private get DeviceName() {
    return this.device.Name;
  }

  private get CanVibrate() {
    return this.device.messageAttributes(ButtplugDeviceMessageType.VibrateCmd) !== undefined;
  }

  private get VibrateCount(): number {
    if (!this.CanVibrate) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.VibrateCmd)!.featureCount!;
  }

  private get VibrateSteps(): number {
    if (!this.CanVibrate) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.VibrateCmd)!.stepCount![0];
  }

  private get CanRotate(): boolean {
    return this.device.messageAttributes(ButtplugDeviceMessageType.RotateCmd) !== undefined;
  }

  private get RotateCount(): number {
    if (!this.CanRotate) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.RotateCmd)!.featureCount!;
  }

  private get RotateSteps(): number {
    if (!this.CanRotate) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.RotateCmd)!.stepCount![0];
  }

  private get CanLinear(): boolean {
    return this.device.messageAttributes(ButtplugDeviceMessageType.LinearCmd) !== undefined;
  }

  private get LinearCount(): number {
    if (!this.CanLinear) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.LinearCmd)!.featureCount!;
  }

  private get LinearSteps(): number {
    if (!this.CanLinear) return 0;
    return this.device.messageAttributes(ButtplugDeviceMessageType.LinearCmd)!.stepCount![0];
  }

  private async setVibration(index: number) {
    if (index == this.VibrateCount) {
      for (let i = 0; i < this.VibrateCount; ++i) {
        this.vibrationValues[i] = this.vibrationValues[this.VibrateCount];
      }
      this.$forceUpdate();
      await this.device.vibrate(this.vibrationValues[this.VibrateCount] / this.VibrateSteps)
    } else {
      await this.device.vibrate([new VibrationCmd(index, this.vibrationValues[index] / this.VibrateSteps)]);
    }
  }

  private async setRotation(index: number) {
    if (index == this.RotateCount) {
      await this.device.rotate(Math.abs(this.rotationValues[this.RotateCount] / this.RotateSteps), this.rotationValues[this.RotateCount] < 0)
    } else {
      await this.device.rotate([new RotationCmd(index, Math.abs(this.rotationValues[index] / this.RotateSteps), this.rotationValues[index] < 0)], undefined);
    }
  }

  private async runOscillation(index: number, positionIndex: 0 | 1) {
    let linearValue = this.linearValues[this.LinearCount]
    await this.device.linear(linearValue[0][positionIndex] / this.LinearSteps, linearValue[1]);
    if (linearValue[2]) {
      setTimeout(async() => await this.runOscillation(index, positionIndex ? 0 : 1), linearValue[1]);
    }
  }

  private startStopOscillation(index: number) {
    if (this.linearValues[index][2]) {
      setTimeout(async () => await this.runOscillation(index, 0), 0);
    }
  }
}
