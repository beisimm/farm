/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_badBtn from "./UI_badBtn";
import UI_lmBtn from "./UI_lmBtn";
import UI_scBtn from "./UI_scBtn";
import UI_jysBtn from "./UI_jysBtn";
import UI_hcbtn from "./UI_hcbtn";
import UI_tcBtn from "./UI_tcBtn";

export default class UI_BottomBtnF extends fgui.GComponent {

	public m_n18:fgui.GImage;
	public m_badBtn:UI_badBtn;
	public m_imBtm:UI_lmBtn;
	public m_scBtn:UI_scBtn;
	public m_jysBtn:UI_jysBtn;
	public m_hcBtn:UI_hcbtn;
	public m_tcBtn:UI_tcBtn;
	public m_n13:fgui.GGroup;
	public m_n19:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x1m";

	public static createInstance():UI_BottomBtnF {
		return <UI_BottomBtnF>(fgui.UIPackage.createObject("com", "BottomBtnF"));
	}

	protected onConstruct():void {
		this.m_n18 = <fgui.GImage>(this.getChild("n18"));
		this.m_badBtn = <UI_badBtn>(this.getChild("badBtn"));
		this.m_imBtm = <UI_lmBtn>(this.getChild("imBtm"));
		this.m_scBtn = <UI_scBtn>(this.getChild("scBtn"));
		this.m_jysBtn = <UI_jysBtn>(this.getChild("jysBtn"));
		this.m_hcBtn = <UI_hcbtn>(this.getChild("hcBtn"));
		this.m_tcBtn = <UI_tcBtn>(this.getChild("tcBtn"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
		this.m_n19 = <fgui.GGroup>(this.getChild("n19"));
	}
}