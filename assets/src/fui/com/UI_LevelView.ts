/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn1 from "./UI_closeBtn1";

export default class UI_LevelView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n1:fgui.GImage;
	public m_n0:fgui.GImage;
	public m_closeBtn:UI_closeBtn1;
	public m_n4:fgui.GGroup;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugqgkvgl";

	public static createInstance():UI_LevelView {
		return <UI_LevelView>(fgui.UIPackage.createObject("com", "LevelView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_closeBtn = <UI_closeBtn1>(this.getChild("closeBtn"));
		this.m_n4 = <fgui.GGroup>(this.getChild("n4"));
		this.m_t0 = this.getTransition("t0");
	}
}