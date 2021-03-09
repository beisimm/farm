/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_inviteBtn from "./UI_inviteBtn";
import UI_closeBtn from "./UI_closeBtn";

export default class UI_FriendView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n9:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_inviteBtn:UI_inviteBtn;
	public m_closeBtn:UI_closeBtn;
	public m_n10:fgui.GTextField;
	public m_list:fgui.GList;
	public m_n6:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugqgkvgd";

	public static createInstance():UI_FriendView {
		return <UI_FriendView>(fgui.UIPackage.createObject("com", "FriendView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_inviteBtn = <UI_inviteBtn>(this.getChild("inviteBtn"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_n10 = <fgui.GTextField>(this.getChild("n10"));
		this.m_list = <fgui.GList>(this.getChild("list"));
		this.m_n6 = <fgui.GGroup>(this.getChild("n6"));
	}
}