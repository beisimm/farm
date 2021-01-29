/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_whitePoint from "./UI_whitePoint";
import UI_yellowPoint from "./UI_yellowPoint";

export default class UI_DealView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n44:fgui.GImage;
	public m_n43:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_n45:fgui.GImage;
	public m_n46:fgui.GImage;
	public m_n48:fgui.GImage;
	public m_n5:UI_whitePoint;
	public m_n6:UI_yellowPoint;
	public m_n7:UI_whitePoint;
	public m_n8:UI_yellowPoint;
	public m_n9:UI_whitePoint;
	public m_n10:UI_yellowPoint;
	public m_n11:UI_whitePoint;
	public m_n12:UI_yellowPoint;
	public m_n13:UI_whitePoint;
	public m_n14:UI_yellowPoint;
	public m_n15:UI_whitePoint;
	public m_n16:UI_yellowPoint;
	public m_n17:UI_whitePoint;
	public m_n18:UI_yellowPoint;
	public m_n19:UI_whitePoint;
	public m_n20:UI_yellowPoint;
	public m_n21:UI_whitePoint;
	public m_n25:fgui.GTextField;
	public m_n30:fgui.GTextField;
	public m_n26:fgui.GTextField;
	public m_n33:fgui.GTextField;
	public m_allList:fgui.GList;
	public m_myList:fgui.GList;
	public m_allBtn:fgui.GGraph;
	public m_myBtn:fgui.GGraph;
	public m_n37:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh38j";

	public static createInstance():UI_DealView {
		return <UI_DealView>(fgui.UIPackage.createObject("com", "DealView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n44 = <fgui.GImage>(this.getChild("n44"));
		this.m_n43 = <fgui.GImage>(this.getChild("n43"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n45 = <fgui.GImage>(this.getChild("n45"));
		this.m_n46 = <fgui.GImage>(this.getChild("n46"));
		this.m_n48 = <fgui.GImage>(this.getChild("n48"));
		this.m_n5 = <UI_whitePoint>(this.getChild("n5"));
		this.m_n6 = <UI_yellowPoint>(this.getChild("n6"));
		this.m_n7 = <UI_whitePoint>(this.getChild("n7"));
		this.m_n8 = <UI_yellowPoint>(this.getChild("n8"));
		this.m_n9 = <UI_whitePoint>(this.getChild("n9"));
		this.m_n10 = <UI_yellowPoint>(this.getChild("n10"));
		this.m_n11 = <UI_whitePoint>(this.getChild("n11"));
		this.m_n12 = <UI_yellowPoint>(this.getChild("n12"));
		this.m_n13 = <UI_whitePoint>(this.getChild("n13"));
		this.m_n14 = <UI_yellowPoint>(this.getChild("n14"));
		this.m_n15 = <UI_whitePoint>(this.getChild("n15"));
		this.m_n16 = <UI_yellowPoint>(this.getChild("n16"));
		this.m_n17 = <UI_whitePoint>(this.getChild("n17"));
		this.m_n18 = <UI_yellowPoint>(this.getChild("n18"));
		this.m_n19 = <UI_whitePoint>(this.getChild("n19"));
		this.m_n20 = <UI_yellowPoint>(this.getChild("n20"));
		this.m_n21 = <UI_whitePoint>(this.getChild("n21"));
		this.m_n25 = <fgui.GTextField>(this.getChild("n25"));
		this.m_n30 = <fgui.GTextField>(this.getChild("n30"));
		this.m_n26 = <fgui.GTextField>(this.getChild("n26"));
		this.m_n33 = <fgui.GTextField>(this.getChild("n33"));
		this.m_allList = <fgui.GList>(this.getChild("allList"));
		this.m_myList = <fgui.GList>(this.getChild("myList"));
		this.m_allBtn = <fgui.GGraph>(this.getChild("allBtn"));
		this.m_myBtn = <fgui.GGraph>(this.getChild("myBtn"));
		this.m_n37 = <fgui.GGroup>(this.getChild("n37"));
	}
}