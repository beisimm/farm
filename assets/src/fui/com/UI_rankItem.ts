/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_touxiang from "./UI_touxiang";

export default class UI_rankItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n4:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_n10:fgui.GGroup;
	public m_n11:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_n13:fgui.GGroup;
	public m_n14:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_n16:fgui.GGroup;
	public m_name:fgui.GTextField;
	public m_price:fgui.GTextField;
	public m_pic:UI_touxiang;
	public m_rank:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugpkkdit";

	public static createInstance():UI_rankItem {
		return <UI_rankItem>(fgui.UIPackage.createObject("com", "rankItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_n10 = <fgui.GGroup>(this.getChild("n10"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n16 = <fgui.GGroup>(this.getChild("n16"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
		this.m_pic = <UI_touxiang>(this.getChild("pic"));
		this.m_rank = <fgui.GTextField>(this.getChild("rank"));
	}
}