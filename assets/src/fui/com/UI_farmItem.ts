/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_farmItemZw from "./UI_farmItemZw";
import UI_handState from "./UI_handState";
import UI_daoshuiCom from "./UI_daoshuiCom";
import UI_farmState from "./UI_farmState";
import UI_shifei from "./UI_shifei";
import UI_shifeiState from "./UI_shifeiState";
import UI_chuchongEff from "./UI_chuchongEff";
import UI_chongziState from "./UI_chongziState";

export default class UI_farmItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_c3:fgui.Controller;
	public m_c4:fgui.Controller;
	public m_c5:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_n11:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_n5:UI_farmItemZw;
	public m_n5s:fgui.GGraph;
	public m_delTimeBtn:fgui.GImage;
	public m_handState:UI_handState;
	public m_dsEff:UI_daoshuiCom;
	public m_farmStateBtn:UI_farmState;
	public m_sfEff:UI_shifei;
	public m_shifeiBtn:UI_shifeiState;
	public m_exp:fgui.GTextField;
	public m_goTop:fgui.GLoader;
	public m_itAdd:fgui.GTextField;
	public m_n17:fgui.GGroup;
	public m_chuchongEff:UI_chuchongEff;
	public m_chongziBtn:UI_chongziState;
	public m_n8:fgui.GImage;
	public m_n6:fgui.GTextField;
	public m_unlockLevel:fgui.GTextField;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugpqiy7";

	public static createInstance():UI_farmItem {
		return <UI_farmItem>(fgui.UIPackage.createObject("com", "farmItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_c3 = this.getController("c3");
		this.m_c4 = this.getController("c4");
		this.m_c5 = this.getController("c5");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n5 = <UI_farmItemZw>(this.getChild("n5"));
		this.m_n5s = <fgui.GGraph>(this.getChild("n5s"));
		this.m_delTimeBtn = <fgui.GImage>(this.getChild("delTimeBtn"));
		this.m_handState = <UI_handState>(this.getChild("handState"));
		this.m_dsEff = <UI_daoshuiCom>(this.getChild("dsEff"));
		this.m_farmStateBtn = <UI_farmState>(this.getChild("farmStateBtn"));
		this.m_sfEff = <UI_shifei>(this.getChild("sfEff"));
		this.m_shifeiBtn = <UI_shifeiState>(this.getChild("shifeiBtn"));
		this.m_exp = <fgui.GTextField>(this.getChild("exp"));
		this.m_goTop = <fgui.GLoader>(this.getChild("goTop"));
		this.m_itAdd = <fgui.GTextField>(this.getChild("itAdd"));
		this.m_n17 = <fgui.GGroup>(this.getChild("n17"));
		this.m_chuchongEff = <UI_chuchongEff>(this.getChild("chuchongEff"));
		this.m_chongziBtn = <UI_chongziState>(this.getChild("chongziBtn"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n6 = <fgui.GTextField>(this.getChild("n6"));
		this.m_unlockLevel = <fgui.GTextField>(this.getChild("unlockLevel"));
		this.m_t0 = this.getTransition("t0");
		this.m_t1 = this.getTransition("t1");
	}
}