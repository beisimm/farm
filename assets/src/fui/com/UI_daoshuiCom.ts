/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_sh from "./UI_sh";

export default class UI_daoshuiCom extends fgui.GComponent {

	public m_n0:fgui.GMovieClip;
	public m_n1:UI_sh;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugroz07h";

	public static createInstance():UI_daoshuiCom {
		return <UI_daoshuiCom>(fgui.UIPackage.createObject("com", "daoshuiCom"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GMovieClip>(this.getChild("n0"));
		this.m_n1 = <UI_sh>(this.getChild("n1"));
		this.m_t0 = this.getTransition("t0");
	}
}