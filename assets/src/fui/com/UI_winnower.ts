/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_winnower extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh3fn";

	public static createInstance():UI_winnower {
		return <UI_winnower>(fgui.UIPackage.createObject("com", "winnower"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_t0 = this.getTransition("t0");
	}
}