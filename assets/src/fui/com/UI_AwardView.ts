/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_AwardBg from "./UI_AwardBg";
import UI_closeBtn1 from "./UI_closeBtn1";

export default class UI_AwardView extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:UI_AwardBg;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_n5:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_txt:fgui.GTextField;
	public m_closeBtn:UI_closeBtn1;
	public m_n18:fgui.GGroup;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh381";

	public static createInstance():UI_AwardView {
		return <UI_AwardView>(fgui.UIPackage.createObject("com", "AwardView"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <UI_AwardBg>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_txt = <fgui.GTextField>(this.getChild("txt"));
		this.m_closeBtn = <UI_closeBtn1>(this.getChild("closeBtn"));
		this.m_n18 = <fgui.GGroup>(this.getChild("n18"));
		this.m_t0 = this.getTransition("t0");
	}
}