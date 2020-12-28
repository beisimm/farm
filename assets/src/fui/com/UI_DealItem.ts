/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_gmBtn1 from "./UI_gmBtn1";

export default class UI_DealItem extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_gmBtn:UI_gmBtn1;
	public m_pic:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_n5:fgui.GTextField;
	public m_n6:fgui.GImage;
	public m_price:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh38p";

	public static createInstance():UI_DealItem {
		return <UI_DealItem>(fgui.UIPackage.createObject("com", "DealItem"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_gmBtn = <UI_gmBtn1>(this.getChild("gmBtn"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_n5 = <fgui.GTextField>(this.getChild("n5"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
	}
}