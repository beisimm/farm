/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_yellowPoint extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh38h";

	public static createInstance():UI_yellowPoint {
		return <UI_yellowPoint>(fgui.UIPackage.createObject("com", "yellowPoint"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_t0 = this.getTransition("t0");
	}
}