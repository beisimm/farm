/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_EmailSecView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_n3:fgui.GImage;
	public m_tittle:fgui.GTextField;
	public m_contentLabel:fgui.GTextField;
	public m_delBtn:fgui.GImage;
	public m_n11:fgui.GTextField;
	public m_n12:fgui.GGroup;
	public m_getBtn:fgui.GImage;
	public m_n8:fgui.GTextField;
	public m_n9:fgui.GGroup;
	public m_n4:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugr5yfht";

	public static createInstance():UI_EmailSecView {
		return <UI_EmailSecView>(fgui.UIPackage.createObject("com", "EmailSecView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_tittle = <fgui.GTextField>(this.getChild("tittle"));
		this.m_contentLabel = <fgui.GTextField>(this.getChild("contentLabel"));
		this.m_delBtn = <fgui.GImage>(this.getChild("delBtn"));
		this.m_n11 = <fgui.GTextField>(this.getChild("n11"));
		this.m_n12 = <fgui.GGroup>(this.getChild("n12"));
		this.m_getBtn = <fgui.GImage>(this.getChild("getBtn"));
		this.m_n8 = <fgui.GTextField>(this.getChild("n8"));
		this.m_n9 = <fgui.GGroup>(this.getChild("n9"));
		this.m_n4 = <fgui.GGroup>(this.getChild("n4"));
	}
}