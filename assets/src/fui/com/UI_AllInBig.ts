/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_farmSecItem from "./UI_farmSecItem";

export default class UI_AllInBig extends fgui.GComponent {

	public m_c3:fgui.Controller;
	public m_name:fgui.GTextField;
	public m_item:UI_farmSecItem;
	public m_n17:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugroz07q";

	public static createInstance():UI_AllInBig {
		return <UI_AllInBig>(fgui.UIPackage.createObject("com", "AllInBig"));
	}

	protected onConstruct():void {
		this.m_c3 = this.getController("c3");
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_item = <UI_farmSecItem>(this.getChild("item"));
		this.m_n17 = <fgui.GImage>(this.getChild("n17"));
	}
}