/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_touxiang extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public m_n7:fgui.GGraph;
	public static URL:string = "ui://cu1uq9ugr5yfh6";

	public static createInstance():UI_touxiang {
		return <UI_touxiang>(fgui.UIPackage.createObject("com", "touxiang"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_n7 = <fgui.GGraph>(this.getChild("n7"));
	}
}