/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_BadView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n16:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_list:fgui.GList;
	public m_n17:fgui.GTextField;
	public m_n9:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x4v";

	public static createInstance():UI_BadView {
		return <UI_BadView>(fgui.UIPackage.createObject("com", "BadView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n17 = <fgui.GTextField>(this.getChild("n17"));
		this.m_n9 = <fgui.GGroup>(this.getChild("n9"));
	}
}