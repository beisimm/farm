/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_DepositView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_list:fgui.GList;
	public m_n12:fgui.GTextField;
	public m_n13:fgui.GTextField;
	public m_n10:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugnkrtjl";

	public static createInstance():UI_DepositView {
		return <UI_DepositView>(fgui.UIPackage.createObject("com", "DepositView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n12 = <fgui.GTextField>(this.getChild("n12"));
		this.m_n13 = <fgui.GTextField>(this.getChild("n13"));
		this.m_n10 = <fgui.GGroup>(this.getChild("n10"));
	}
}