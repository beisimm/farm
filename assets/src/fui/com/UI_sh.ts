/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_sh extends fgui.GComponent {

	public m_n1:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugroz06z";

	public static createInstance():UI_sh {
		return <UI_sh>(fgui.UIPackage.createObject("com", "sh"));
	}

	protected onConstruct():void {
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_t0 = this.getTransition("t0");
	}
}