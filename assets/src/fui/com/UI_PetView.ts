/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_wyBtn from "./UI_wyBtn";
import UI_PetItem from "./UI_PetItem";
import UI_closeBtn1 from "./UI_closeBtn1";

export default class UI_PetView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_b0:UI_wyBtn;
	public m_b1:UI_wyBtn;
	public m_b2:UI_wyBtn;
	public m_i0:UI_PetItem;
	public m_i1:UI_PetItem;
	public m_i2:UI_PetItem;
	public m_closeBtn:UI_closeBtn1;
	public m_n10:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh3fw";

	public static createInstance():UI_PetView {
		return <UI_PetView>(fgui.UIPackage.createObject("com", "PetView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_b0 = <UI_wyBtn>(this.getChild("b0"));
		this.m_b1 = <UI_wyBtn>(this.getChild("b1"));
		this.m_b2 = <UI_wyBtn>(this.getChild("b2"));
		this.m_i0 = <UI_PetItem>(this.getChild("i0"));
		this.m_i1 = <UI_PetItem>(this.getChild("i1"));
		this.m_i2 = <UI_PetItem>(this.getChild("i2"));
		this.m_closeBtn = <UI_closeBtn1>(this.getChild("closeBtn"));
		this.m_n10 = <fgui.GGroup>(this.getChild("n10"));
	}
}