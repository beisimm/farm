/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_farmItem from "./UI_farmItem";

export default class UI_farmMain extends fgui.GComponent {

	public m_n1:UI_farmItem;
	public m_n2:UI_farmItem;
	public m_n3:UI_farmItem;
	public m_n4:UI_farmItem;
	public m_n5:UI_farmItem;
	public m_n6:UI_farmItem;
	public m_n7:UI_farmItem;
	public m_n8:UI_farmItem;
	public m_n9:UI_farmItem;
	public m_n10:UI_farmItem;
	public m_n11:UI_farmItem;
	public m_n12:UI_farmItem;
	public m_a0:fgui.GGraph;
	public m_a1:fgui.GGraph;
	public m_a2:fgui.GGraph;
	public m_a3:fgui.GGraph;
	public m_a4:fgui.GGraph;
	public m_a5:fgui.GGraph;
	public m_a6:fgui.GGraph;
	public m_a7:fgui.GGraph;
	public m_a8:fgui.GGraph;
	public m_a9:fgui.GGraph;
	public m_a10:fgui.GGraph;
	public m_a11:fgui.GGraph;
	public m_goHomeBtn:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugpqiy9";

	public static createInstance():UI_farmMain {
		return <UI_farmMain>(fgui.UIPackage.createObject("com", "farmMain"));
	}

	protected onConstruct():void {
		this.m_n1 = <UI_farmItem>(this.getChild("n1"));
		this.m_n2 = <UI_farmItem>(this.getChild("n2"));
		this.m_n3 = <UI_farmItem>(this.getChild("n3"));
		this.m_n4 = <UI_farmItem>(this.getChild("n4"));
		this.m_n5 = <UI_farmItem>(this.getChild("n5"));
		this.m_n6 = <UI_farmItem>(this.getChild("n6"));
		this.m_n7 = <UI_farmItem>(this.getChild("n7"));
		this.m_n8 = <UI_farmItem>(this.getChild("n8"));
		this.m_n9 = <UI_farmItem>(this.getChild("n9"));
		this.m_n10 = <UI_farmItem>(this.getChild("n10"));
		this.m_n11 = <UI_farmItem>(this.getChild("n11"));
		this.m_n12 = <UI_farmItem>(this.getChild("n12"));
		this.m_a0 = <fgui.GGraph>(this.getChild("a0"));
		this.m_a1 = <fgui.GGraph>(this.getChild("a1"));
		this.m_a2 = <fgui.GGraph>(this.getChild("a2"));
		this.m_a3 = <fgui.GGraph>(this.getChild("a3"));
		this.m_a4 = <fgui.GGraph>(this.getChild("a4"));
		this.m_a5 = <fgui.GGraph>(this.getChild("a5"));
		this.m_a6 = <fgui.GGraph>(this.getChild("a6"));
		this.m_a7 = <fgui.GGraph>(this.getChild("a7"));
		this.m_a8 = <fgui.GGraph>(this.getChild("a8"));
		this.m_a9 = <fgui.GGraph>(this.getChild("a9"));
		this.m_a10 = <fgui.GGraph>(this.getChild("a10"));
		this.m_a11 = <fgui.GGraph>(this.getChild("a11"));
		this.m_goHomeBtn = <fgui.GImage>(this.getChild("goHomeBtn"));
	}
}