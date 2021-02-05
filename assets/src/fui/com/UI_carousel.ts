/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_carousel extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_label:fgui.GTextField;
	public m_n5:fgui.GGroup;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugnkrtjs";

	public static createInstance():UI_carousel {
		return <UI_carousel>(fgui.UIPackage.createObject("com", "carousel"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_label = <fgui.GTextField>(this.getChild("label"));
		this.m_n5 = <fgui.GGroup>(this.getChild("n5"));
		this.m_t0 = this.getTransition("t0");
	}
}