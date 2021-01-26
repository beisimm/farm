/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_DailyView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n7:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_list:fgui.GList;
	public m_n8:fgui.GTextField;
	public m_n9:fgui.GTextField;
	public m_n4:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh3d1";

	public static createInstance():UI_DailyView {
		return <UI_DailyView>(fgui.UIPackage.createObject("com", "DailyView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n8 = <fgui.GTextField>(this.getChild("n8"));
		this.m_n9 = <fgui.GTextField>(this.getChild("n9"));
		this.m_n4 = <fgui.GGroup>(this.getChild("n4"));
	}
}