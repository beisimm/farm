/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_txBtn from "./UI_txBtn";
import UI_LVPB from "./UI_LVPB";

export default class UI_topShowUi extends fgui.GComponent {

	public m_n14:fgui.GImage;
	public m_money:fgui.GTextField;
	public m_n0:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_n16:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_n15:UI_txBtn;
	public m_LVPB:UI_LVPB;
	public m_lv:fgui.GTextField;
	public m_name:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugb03x1o";

	public static createInstance():UI_topShowUi {
		return <UI_topShowUi>(fgui.UIPackage.createObject("com", "topShowUi"));
	}

	protected onConstruct():void {
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_money = <fgui.GTextField>(this.getChild("money"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n15 = <UI_txBtn>(this.getChild("n15"));
		this.m_LVPB = <UI_LVPB>(this.getChild("LVPB"));
		this.m_lv = <fgui.GTextField>(this.getChild("lv"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
	}
}