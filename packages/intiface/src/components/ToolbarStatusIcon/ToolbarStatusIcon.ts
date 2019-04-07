import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import router from "../../router";

@Component({})
export default class ToolbarStatusIcon extends Vue {
  @Prop()
  private tooltip!: string;

  @Prop()
  private link!: string;

  @Prop()
  private icon!: string;

  @Prop({
    default: "#FFF",
  })
  private color!: string;

  private navigateTo(aPath: string) {
    router.push(aPath);
  }
}
