/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DepositItem extends fgui.GComponent {

	public m_n3:fgui.GImage;
	public m_price:fgui.GTextField;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugnkrtjq";

	public static createInstance():UI_DepositItem {
		return <UI_DepositItem>(fgui.UIPackage.createObject("com", "DepositItem"));
	}

	protected onConstruct():void {
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
	}
}