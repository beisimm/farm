/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_xjBtn1 from "./UI_xjBtn1";

export default class UI_DealItem2 extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_n5:fgui.GTextField;
	public m_xjBtn:UI_xjBtn1;
	public m_profit:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh38u";

	public static createInstance():UI_DealItem2 {
		return <UI_DealItem2>(fgui.UIPackage.createObject("com", "DealItem2"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_n5 = <fgui.GTextField>(this.getChild("n5"));
		this.m_xjBtn = <UI_xjBtn1>(this.getChild("xjBtn"));
		this.m_profit = <fgui.GTextField>(this.getChild("profit"));
	}
}