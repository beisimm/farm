/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_yesBtn from "./UI_yesBtn";

export default class UI_AlertView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_title:fgui.GTextField;
	public m_content:fgui.GTextField;
	public m_n3:fgui.GGroup;
	public m_yesBtn:UI_yesBtn;
	public static URL:string = "ui://cu1uq9ugtyh37x";

	public static createInstance():UI_AlertView {
		return <UI_AlertView>(fgui.UIPackage.createObject("com", "AlertView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_title = <fgui.GTextField>(this.getChild("title"));
		this.m_content = <fgui.GTextField>(this.getChild("content"));
		this.m_n3 = <fgui.GGroup>(this.getChild("n3"));
		this.m_yesBtn = <UI_yesBtn>(this.getChild("yesBtn"));
	}
}