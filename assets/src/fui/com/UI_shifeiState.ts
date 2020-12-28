/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_shifeiState extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3aj";

	public static createInstance():UI_shifeiState {
		return <UI_shifeiState>(fgui.UIPackage.createObject("com", "shifeiState"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}