/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_ProgressBar1 from "./UI_ProgressBar1";

export default class UI_UserView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n16:fgui.GImage;
	public m_nameLabel:fgui.GTextField;
	public m_closeBtn:UI_closeBtn;
	public m_settingBtn:fgui.GImage;
	public m_kfBtn:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_pc:UI_ProgressBar1;
	public m_n5:fgui.GImage;
	public m_lvLabel:fgui.GTextField;
	public m_pic:fgui.GLoader;
	public m_n11:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugqgkvgu";

	public static createInstance():UI_UserView {
		return <UI_UserView>(fgui.UIPackage.createObject("com", "UserView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_nameLabel = <fgui.GTextField>(this.getChild("nameLabel"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_settingBtn = <fgui.GImage>(this.getChild("settingBtn"));
		this.m_kfBtn = <fgui.GImage>(this.getChild("kfBtn"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_pc = <UI_ProgressBar1>(this.getChild("pc"));
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_lvLabel = <fgui.GTextField>(this.getChild("lvLabel"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_n11 = <fgui.GGroup>(this.getChild("n11"));
	}
}