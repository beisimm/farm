/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_whitePoint extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh38k";

	public static createInstance():UI_whitePoint {
		return <UI_whitePoint>(fgui.UIPackage.createObject("com", "whitePoint"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_t0 = this.getTransition("t0");
	}
}