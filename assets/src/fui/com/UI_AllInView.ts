/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_AllinItem from "./UI_AllinItem";
import UI_oneKeyAddBtn from "./UI_oneKeyAddBtn";
import UI_hcBtn from "./UI_hcBtn";

export default class UI_AllInView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n2:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_list:fgui.GList;
	public m_p0:UI_AllinItem;
	public m_p1:UI_AllinItem;
	public m_p2:UI_AllinItem;
	public m_p3:UI_AllinItem;
	public m_p4:UI_AllinItem;
	public m_oneBtn:UI_oneKeyAddBtn;
	public m_hcBtn:UI_hcBtn;
	public m_n4:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugroz07l";

	public static createInstance():UI_AllInView {
		return <UI_AllInView>(fgui.UIPackage.createObject("com", "AllInView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_p0 = <UI_AllinItem>(this.getChild("p0"));
		this.m_p1 = <UI_AllinItem>(this.getChild("p1"));
		this.m_p2 = <UI_AllinItem>(this.getChild("p2"));
		this.m_p3 = <UI_AllinItem>(this.getChild("p3"));
		this.m_p4 = <UI_AllinItem>(this.getChild("p4"));
		this.m_oneBtn = <UI_oneKeyAddBtn>(this.getChild("oneBtn"));
		this.m_hcBtn = <UI_hcBtn>(this.getChild("hcBtn"));
		this.m_n4 = <fgui.GGroup>(this.getChild("n4"));
	}
}