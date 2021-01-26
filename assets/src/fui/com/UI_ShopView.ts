/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_ShopView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n11:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_list:fgui.GList;
	public m_n13:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x6l";

	public static createInstance():UI_ShopView {
		return <UI_ShopView>(fgui.UIPackage.createObject("com", "ShopView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
	}
}