/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_BadView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n15:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_n2:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_n7:fgui.GImage;
	public m_list:fgui.GList;
	public m_n9:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x4v";

	public static createInstance():UI_BadView {
		return <UI_BadView>(fgui.UIPackage.createObject("com", "BadView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n9 = <fgui.GGroup>(this.getChild("n9"));
	}
}