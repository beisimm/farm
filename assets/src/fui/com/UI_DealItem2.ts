/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DealItem2 extends fgui.GComponent {

	public m_n8:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_buyBtn:fgui.GImage;
	public m_price:fgui.GTextField;
	public m_a:fgui.GTextField;
	public m_name:fgui.GTextField;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugezv1je";

	public static createInstance():UI_DealItem2 {
		return <UI_DealItem2>(fgui.UIPackage.createObject("com", "DealItem2"));
	}

	protected onConstruct():void {
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_buyBtn = <fgui.GImage>(this.getChild("buyBtn"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
		this.m_a = <fgui.GTextField>(this.getChild("a"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
	}
}