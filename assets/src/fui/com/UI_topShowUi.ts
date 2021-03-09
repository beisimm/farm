/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_touxiang from "./UI_touxiang";
import UI_txBtn from "./UI_txBtn";
import UI_LVPB from "./UI_LVPB";

export default class UI_topShowUi extends fgui.GComponent {

	public m_coinBg:fgui.GImage;
	public m_money:fgui.GTextField;
	public m_coin:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_pic:UI_touxiang;
	public m_n16:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_txBtn:UI_txBtn;
	public m_LVPB:UI_LVPB;
	public m_lv:fgui.GTextField;
	public m_name:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugb03x1o";

	public static createInstance():UI_topShowUi {
		return <UI_topShowUi>(fgui.UIPackage.createObject("com", "topShowUi"));
	}

	protected onConstruct():void {
		this.m_coinBg = <fgui.GImage>(this.getChild("coinBg"));
		this.m_money = <fgui.GTextField>(this.getChild("money"));
		this.m_coin = <fgui.GImage>(this.getChild("coin"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_pic = <UI_touxiang>(this.getChild("pic"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_txBtn = <UI_txBtn>(this.getChild("txBtn"));
		this.m_LVPB = <UI_LVPB>(this.getChild("LVPB"));
		this.m_lv = <fgui.GTextField>(this.getChild("lv"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
	}
}