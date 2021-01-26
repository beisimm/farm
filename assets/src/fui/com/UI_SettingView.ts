/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_settingBtn from "./UI_settingBtn";
import UI_settingBtn1 from "./UI_settingBtn1";
import UI_closeBtn from "./UI_closeBtn";

export default class UI_SettingView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_n16:fgui.GImage;
	public m_sd1:UI_settingBtn;
	public m_sd2:UI_settingBtn1;
	public m_closeBtn:UI_closeBtn;
	public m_n12:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh3en";

	public static createInstance():UI_SettingView {
		return <UI_SettingView>(fgui.UIPackage.createObject("com", "SettingView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_sd1 = <UI_settingBtn>(this.getChild("sd1"));
		this.m_sd2 = <UI_settingBtn1>(this.getChild("sd2"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n12 = <fgui.GGroup>(this.getChild("n12"));
	}
}