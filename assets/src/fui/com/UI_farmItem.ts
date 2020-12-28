/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_farmItemZw from "./UI_farmItemZw";
import UI_daoshuiCom from "./UI_daoshuiCom";
import UI_farmState from "./UI_farmState";
import UI_shifei from "./UI_shifei";
import UI_shifeiState from "./UI_shifeiState";

export default class UI_farmItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_c3:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_n11:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_n5:UI_farmItemZw;
	public m_n8:fgui.GImage;
	public m_n6:fgui.GTextField;
	public m_dsEff:UI_daoshuiCom;
	public m_farmStateBtn:UI_farmState;
	public m_sfEff:UI_shifei;
	public m_shifeiBtn:UI_shifeiState;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugpqiy7";

	public static createInstance():UI_farmItem {
		return <UI_farmItem>(fgui.UIPackage.createObject("com", "farmItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_c3 = this.getController("c3");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n5 = <UI_farmItemZw>(this.getChild("n5"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n6 = <fgui.GTextField>(this.getChild("n6"));
		this.m_dsEff = <UI_daoshuiCom>(this.getChild("dsEff"));
		this.m_farmStateBtn = <UI_farmState>(this.getChild("farmStateBtn"));
		this.m_sfEff = <UI_shifei>(this.getChild("sfEff"));
		this.m_shifeiBtn = <UI_shifeiState>(this.getChild("shifeiBtn"));
		this.m_t0 = this.getTransition("t0");
	}
}