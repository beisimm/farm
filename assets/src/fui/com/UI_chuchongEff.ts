/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_chuchongEff extends fgui.GComponent {

	public m_n22:fgui.GImage;
	public m_n23:fgui.GImage;
	public m_n24:fgui.GImage;
	public m_n25:fgui.GImage;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugr5yfh8";

	public static createInstance():UI_chuchongEff {
		return <UI_chuchongEff>(fgui.UIPackage.createObject("com", "chuchongEff"));
	}

	protected onConstruct():void {
		this.m_n22 = <fgui.GImage>(this.getChild("n22"));
		this.m_n23 = <fgui.GImage>(this.getChild("n23"));
		this.m_n24 = <fgui.GImage>(this.getChild("n24"));
		this.m_n25 = <fgui.GImage>(this.getChild("n25"));
		this.m_t0 = this.getTransition("t0");
		this.m_t1 = this.getTransition("t1");
	}
}