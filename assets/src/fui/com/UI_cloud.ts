/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_cloud extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public m_t2:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh3ft";

	public static createInstance():UI_cloud {
		return <UI_cloud>(fgui.UIPackage.createObject("com", "cloud"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_t0 = this.getTransition("t0");
		this.m_t1 = this.getTransition("t1");
		this.m_t2 = this.getTransition("t2");
	}
}