/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_EmailView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n5:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_n3:fgui.GImage;
	public m_list:fgui.GList;
	public m_n6:fgui.GImage;
	public m_n13:fgui.GImage;
	public m_AllGetBtn:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_AllDelBtn:fgui.GImage;
	public m_n14:fgui.GImage;
	public m_n9:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugr5yfhe";

	public static createInstance():UI_EmailView {
		return <UI_EmailView>(fgui.UIPackage.createObject("com", "EmailView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_AllGetBtn = <fgui.GImage>(this.getChild("AllGetBtn"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_AllDelBtn = <fgui.GImage>(this.getChild("AllDelBtn"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_n9 = <fgui.GGroup>(this.getChild("n9"));
	}
}