/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_flyItem extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public static URL:string = "ui://cu1uq9ugb03x6t";

	public static createInstance():UI_flyItem {
		return <UI_flyItem>(fgui.UIPackage.createObject("com", "flyItem"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
	}
}