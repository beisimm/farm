/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AwardBg extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh386";

	public static createInstance():UI_AwardBg {
		return <UI_AwardBg>(fgui.UIPackage.createObject("com", "AwardBg"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_t0 = this.getTransition("t0");
	}
}