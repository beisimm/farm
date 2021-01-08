/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_BottomBtnF extends fgui.GComponent {

	public m_n18:fgui.GImage;
	public m_badBtn:fgui.GImage;
	public m_scBtn:fgui.GImage;
	public m_jysBtn:fgui.GImage;
	public m_hcBtn:fgui.GImage;
	public m_tcBtn:fgui.GImage;
	public m_n25:fgui.GGroup;
	public m_n19:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugb03x1m";

	public static createInstance():UI_BottomBtnF {
		return <UI_BottomBtnF>(fgui.UIPackage.createObject("com", "BottomBtnF"));
	}

	protected onConstruct():void {
		this.m_n18 = <fgui.GImage>(this.getChild("n18"));
		this.m_badBtn = <fgui.GImage>(this.getChild("badBtn"));
		this.m_scBtn = <fgui.GImage>(this.getChild("scBtn"));
		this.m_jysBtn = <fgui.GImage>(this.getChild("jysBtn"));
		this.m_hcBtn = <fgui.GImage>(this.getChild("hcBtn"));
		this.m_tcBtn = <fgui.GImage>(this.getChild("tcBtn"));
		this.m_n25 = <fgui.GGroup>(this.getChild("n25"));
		this.m_n19 = <fgui.GGroup>(this.getChild("n19"));
	}
}