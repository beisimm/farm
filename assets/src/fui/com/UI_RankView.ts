/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_touxiang from "./UI_touxiang";
import UI_closeBtn from "./UI_closeBtn";

export default class UI_RankView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n3:fgui.GImage;
	public m_n23:fgui.GImage;
	public m_n5:fgui.GTextField;
	public m_list:fgui.GList;
	public m_n7:fgui.GTextField;
	public m_n8:fgui.GTextField;
	public m_n9:fgui.GTextField;
	public m_rank:fgui.GTextField;
	public m_pic:UI_touxiang;
	public m_name:fgui.GTextField;
	public m_price:fgui.GTextField;
	public m_closeBtn:UI_closeBtn;
	public m_n16:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugpkkdir";

	public static createInstance():UI_RankView {
		return <UI_RankView>(fgui.UIPackage.createObject("com", "RankView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n23 = <fgui.GImage>(this.getChild("n23"));
		this.m_n5 = <fgui.GTextField>(this.getChild("n5"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n7 = <fgui.GTextField>(this.getChild("n7"));
		this.m_n8 = <fgui.GTextField>(this.getChild("n8"));
		this.m_n9 = <fgui.GTextField>(this.getChild("n9"));
		this.m_rank = <fgui.GTextField>(this.getChild("rank"));
		this.m_pic = <UI_touxiang>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_price = <fgui.GTextField>(this.getChild("price"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n16 = <fgui.GGroup>(this.getChild("n16"));
	}
}