/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_yesBtn from "./UI_yesBtn";

export default class UI_AlertView extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_title:fgui.GTextField;
	public m_content:fgui.GTextField;
	public m_yesBtn:UI_yesBtn;
	public m_noBtn:fgui.GTextField;
	public m_n13:fgui.GGroup;
	public m_yesBtn1:UI_yesBtn;
	public m_noBtn1:fgui.GTextField;
	public m_n16:fgui.GGroup;
	public m_yesBtn2:UI_yesBtn;
	public m_noBtn2:fgui.GTextField;
	public m_n20:fgui.GGroup;
	public m_n3:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh37x";

	public static createInstance():UI_AlertView {
		return <UI_AlertView>(fgui.UIPackage.createObject("com", "AlertView"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_title = <fgui.GTextField>(this.getChild("title"));
		this.m_content = <fgui.GTextField>(this.getChild("content"));
		this.m_yesBtn = <UI_yesBtn>(this.getChild("yesBtn"));
		this.m_noBtn = <fgui.GTextField>(this.getChild("noBtn"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
		this.m_yesBtn1 = <UI_yesBtn>(this.getChild("yesBtn1"));
		this.m_noBtn1 = <fgui.GTextField>(this.getChild("noBtn1"));
		this.m_n16 = <fgui.GGroup>(this.getChild("n16"));
		this.m_yesBtn2 = <UI_yesBtn>(this.getChild("yesBtn2"));
		this.m_noBtn2 = <fgui.GTextField>(this.getChild("noBtn2"));
		this.m_n20 = <fgui.GGroup>(this.getChild("n20"));
		this.m_n3 = <fgui.GGroup>(this.getChild("n3"));
	}
}