/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_petPb from "./UI_petPb";

export default class UI_PetItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n13:fgui.GImage;
	public m_n14:fgui.GImage;
	public m_name:fgui.GTextField;
	public m_pb:UI_petPb;
	public m_n11:fgui.GImage;
	public m_state:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh3g3";

	public static createInstance():UI_PetItem {
		return <UI_PetItem>(fgui.UIPackage.createObject("com", "PetItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_pb = <UI_petPb>(this.getChild("pb"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_state = <fgui.GTextField>(this.getChild("state"));
	}
}