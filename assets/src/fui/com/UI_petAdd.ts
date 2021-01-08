/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_petAdd extends fgui.GComponent {

	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3gb";

	public static createInstance():UI_petAdd {
		return <UI_petAdd>(fgui.UIPackage.createObject("com", "petAdd"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}