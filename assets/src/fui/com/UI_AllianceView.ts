/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_AllianceView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_n2:fgui.GTextField;
	public m_n3:fgui.GImage;
	public m_shareBtn:fgui.GGraph;
	public m_list:fgui.GList;
	public m_getBtn:fgui.GImage;
	public m_n17:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugnkrtjf";

	public static createInstance():UI_AllianceView {
		return <UI_AllianceView>(fgui.UIPackage.createObject("com", "AllianceView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n2 = <fgui.GTextField>(this.getChild("n2"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_shareBtn = <fgui.GGraph>(this.getChild("shareBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_getBtn = <fgui.GImage>(this.getChild("getBtn"));
		this.m_n17 = <fgui.GGroup>(this.getChild("n17"));
	}
}