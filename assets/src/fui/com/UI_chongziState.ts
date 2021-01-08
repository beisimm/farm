/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_chongziState extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugr5yfhb";

	public static createInstance():UI_chongziState {
		return <UI_chongziState>(fgui.UIPackage.createObject("com", "chongziState"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}