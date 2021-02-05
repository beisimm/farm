/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_MaxBtn from "./UI_MaxBtn";
import UI_closeBtn1 from "./UI_closeBtn1";
import UI_delBtn from "./UI_delBtn";
import UI_addBtn from "./UI_addBtn";
import UI_csBtn from "./UI_csBtn";
import UI_zmBtn from "./UI_zmBtn";

export default class UI_BadSecView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_n20:fgui.GImage;
	public m_n30:fgui.GImage;
	public m_n31:fgui.GImage;
	public m_maxBtn:UI_MaxBtn;
	public m_closeBtn:UI_closeBtn1;
	public m_pic:fgui.GLoader;
	public m_delBtn:UI_delBtn;
	public m_addBtn:UI_addBtn;
	public m_n32:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_n14:fgui.GImage;
	public m_name:fgui.GTextField;
	public m_n16:fgui.GImage;
	public m_num:fgui.GTextField;
	public m_price:fgui.GTextField;
	public m_allPrice:fgui.GTextField;
	public m_n23:fgui.GImage;
	public m_n24:fgui.GImage;
	public m_n25:fgui.GImage;
	public m_n26:fgui.GImage;
	public m_csBtn1:UI_csBtn;
	public m_sjbtn:UI_zmBtn;
	public m_content:fgui.GTextField;
	public m_csBtn:UI_csBtn;
	public m_n37:fgui.GImage;
	public m_n38:fgui.GTextField;
	public m_input:fgui.GTextInput;
	public m_n39:fgui.GGroup;
	public m_n21:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x52";

	public static createInstance():UI_BadSecView {
		return <UI_BadSecView>(fgui.UIPackage.createObject("com", "BadSecView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n20 = <fgui.GImage>(this.getChild("n20"));
		this.m_n30 = <fgui.GImage>(this.getChild("n30"));
		this.m_n31 = <fgui.GImage>(this.getChild("n31"));
		this.m_maxBtn = <UI_MaxBtn>(this.getChild("maxBtn"));
		this.m_closeBtn = <UI_closeBtn1>(this.getChild("closeBtn"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_delBtn = <UI_delBtn>(this.getChild("delBtn"));
		this.m_addBtn = <UI_addBtn>(this.getChild("addBtn"));
		this.m_n32 = <fgui.GImage>(this.getChild("n32"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
		this.m_allPrice = <fgui.GTextField>(this.getChild("allPrice"));
		this.m_n23 = <fgui.GImage>(this.getChild("n23"));
		this.m_n24 = <fgui.GImage>(this.getChild("n24"));
		this.m_n25 = <fgui.GImage>(this.getChild("n25"));
		this.m_n26 = <fgui.GImage>(this.getChild("n26"));
		this.m_csBtn1 = <UI_csBtn>(this.getChild("csBtn1"));
		this.m_sjbtn = <UI_zmBtn>(this.getChild("sjbtn"));
		this.m_content = <fgui.GTextField>(this.getChild("content"));
		this.m_csBtn = <UI_csBtn>(this.getChild("csBtn"));
		this.m_n37 = <fgui.GImage>(this.getChild("n37"));
		this.m_n38 = <fgui.GTextField>(this.getChild("n38"));
		this.m_input = <fgui.GTextInput>(this.getChild("input"));
		this.m_n39 = <fgui.GGroup>(this.getChild("n39"));
		this.m_n21 = <fgui.GGroup>(this.getChild("n21"));
	}
}