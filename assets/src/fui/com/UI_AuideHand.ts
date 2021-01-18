/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AuideHand extends fgui.GComponent {

	public m_n1:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugr5yfi2";

	public static createInstance():UI_AuideHand {
		return <UI_AuideHand>(fgui.UIPackage.createObject("com", "AuideHand"));
	}

	protected onConstruct():void {
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_t0 = this.getTransition("t0");
	}
}