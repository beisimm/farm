/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_petPb extends fgui.GProgressBar {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3g9";

	public static createInstance():UI_petPb {
		return <UI_petPb>(fgui.UIPackage.createObject("com", "petPb"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_bar = <fgui.GImage>(this.getChild("bar"));
	}
}