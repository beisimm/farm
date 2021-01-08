/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LiftBtn2 extends fgui.GComponent {

	public m_friendBtn:fgui.GImage;
	public m_taskBtn:fgui.GImage;
	public m_informBtn:fgui.GImage;
	public m_rankBtn:fgui.GImage;
	public m_petBtn:fgui.GImage;
	public m_imBtm:fgui.GImage;
	public m_n7:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh3dg";

	public static createInstance():UI_LiftBtn2 {
		return <UI_LiftBtn2>(fgui.UIPackage.createObject("com", "LiftBtn2"));
	}

	protected onConstruct():void {
		this.m_friendBtn = <fgui.GImage>(this.getChild("friendBtn"));
		this.m_taskBtn = <fgui.GImage>(this.getChild("taskBtn"));
		this.m_informBtn = <fgui.GImage>(this.getChild("informBtn"));
		this.m_rankBtn = <fgui.GImage>(this.getChild("rankBtn"));
		this.m_petBtn = <fgui.GImage>(this.getChild("petBtn"));
		this.m_imBtm = <fgui.GImage>(this.getChild("imBtm"));
		this.m_n7 = <fgui.GGroup>(this.getChild("n7"));
	}
}