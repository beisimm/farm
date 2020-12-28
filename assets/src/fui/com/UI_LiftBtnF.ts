/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_showBtn from "./UI_showBtn";
import UI_hideBtn from "./UI_hideBtn";
import UI_LiftBtn2 from "./UI_LiftBtn2";

export default class UI_LiftBtnF extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_showBtn:UI_showBtn;
	public m_hideBtn:UI_hideBtn;
	public m_liftBox:UI_LiftBtn2;
	public m_hide:fgui.Transition;
	public m_show:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh3de";

	public static createInstance():UI_LiftBtnF {
		return <UI_LiftBtnF>(fgui.UIPackage.createObject("com", "LiftBtnF"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_showBtn = <UI_showBtn>(this.getChild("showBtn"));
		this.m_hideBtn = <UI_hideBtn>(this.getChild("hideBtn"));
		this.m_liftBox = <UI_LiftBtn2>(this.getChild("liftBox"));
		this.m_hide = this.getTransition("hide");
		this.m_show = this.getTransition("show");
	}
}